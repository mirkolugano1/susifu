using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;

namespace Menuplanung
{
    class Program
    {
        static void Main(string[] args)
        {
            var directoryBase = new DirectoryInfo(AppDomain.CurrentDomain.BaseDirectory).Parent.Parent.Parent.FullName;
            var directory = new DirectoryInfo(AppDomain.CurrentDomain.BaseDirectory).Parent.Parent.Parent.Parent.FullName;            
            var listOfObjects = File.ReadLines($"{directoryBase}/list.csv").Select(line => new Tuple<string, string>(line.Split(',')[0], String.Join(",", line.Split(',').Skip(1)).Trim('"'))).ToList();

            var sb = new StringBuilder();            
            GetMonthMenus(ref sb, listOfObjects, false, out string monthNumber);

            var path = $"{directory}/Webseite/Scripts/menus/menus_{monthNumber}.js";
            File.WriteAllText(path, sb.ToString());
            UploadFile(path);
        }

        static void UploadFile(string path)
        {
            var filename = Path.GetFileName(path);
            using (var client = new WebClient())
            {
                client.Credentials = new NetworkCredential("susifu\\$susifu", "hAMYccHlhx6KwEqdWka20wXN3qtaqg577pbWhckEJNB6b6Yh5sX91r5Zojmu");
                client.UploadFile($"ftp://waws-prod-am2-059.ftp.azurewebsites.windows.net/site/wwwroot/scripts/menus/{filename}", WebRequestMethods.Ftp.UploadFile, path);
            }
        }

        static void GetMonthMenus(ref StringBuilder sb, List<Tuple<string, string>> listOfObjects, bool isCurrentMonth, out string monthNumber)
        {
            const int daysToReset = 14;
            var entries = listOfObjects.Count();
            Random r = new Random();

            var now = DateTime.Now;
            if (!isCurrentMonth) now = now.AddMonths(1);

            var month = now.ToString("MM");
            var days = 31;
            switch (month)
            {
                case "02":
                    days = 28;
                    break;
                case "04":
                case "06":
                case "09":
                    days = 30;
                    break;
            }

            monthNumber = month;
            var usedCategories = new List<string>();
            var usedEntries = new List<int>();
            
            sb.Append("var menus" + month + " = {");
            sb.AppendLine();
            for (var i = 0; i < days; i++)
            {
                if (i % daysToReset == 0) usedCategories.Clear();
                int rInt;
                bool contained;
                Tuple<string, string> tup;

                do
                {
                    rInt = r.Next(0, entries);
                    if (rInt == entries) rInt--;
                    tup = listOfObjects[rInt];
                    contained = usedEntries.Contains(rInt) || CountOccurrences(usedCategories, tup.Item1) > 1;
                    if (!contained)
                    {
                        usedEntries.Add(rInt);
                        usedCategories.Add(tup.Item1);                        
                        if (i > daysToReset) usedEntries.RemoveAt(0);
                    }
                } while (contained);

                var label = tup.Item2;
                label = label.Replace("'", "\\'");
                sb.Append($"{i + 1}: '{label}'");
                if (i < days - 1) sb.Append(", ");
                sb.AppendLine();
            }
            sb.Append("};\r\n");            
        }

        static int CountOccurrences(List<string> usedCategories, string str)
        {
            var count = 0;
            foreach (var cat in usedCategories)
            {
                if (cat.Equals(str)) count++;
            }
            return count;
        }
    }
}
