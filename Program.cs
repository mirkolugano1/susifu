using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Menuplanung
{
    class Program
    {
        static void Main(string[] args)
        {
            var directory = new DirectoryInfo(AppDomain.CurrentDomain.BaseDirectory).Parent.Parent.Parent.FullName;            
            var listOfObjects = File.ReadLines($"{directory}/list.csv").Select(line => new Tuple<string, string>(line.Split(',')[0], String.Join(",", line.Split(',').Skip(1)).Trim('"'))).ToList();

            var entries = listOfObjects.Count();
            Random r = new Random();

            var month = DateTime.Now.ToString("MM");
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

            var usedCategories = new List<string>();
            var usedEntries = new List<int>();
            var sb = new StringBuilder();
            sb.Append("var menus = {");
            sb.AppendLine();
            for (var i = 0; i < days; i++)
            {
                if (i % 7 == 0) usedCategories.Clear();
                int rInt;
                bool contained;
                do
                {
                    rInt = r.Next(0, entries);
                    if (rInt == entries) rInt--;
                    contained = usedEntries.Contains(rInt) && CountOccurrences(usedCategories, listOfObjects[rInt].Item1) > 1;
                    if (!contained) usedEntries.Add(rInt);
                } while (contained);

                var tup = listOfObjects[rInt];
                usedCategories.Add(tup.Item1);
                var label = tup.Item2;
                label = label.Replace("'", "\\'");
                sb.Append($"{i + 1}: '{label}'");
                if (i < days - 1) sb.Append(", ");
                sb.AppendLine();
            }
            sb.Append("};");

            File.WriteAllText($"{directory}/menus.js", sb.ToString());
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
