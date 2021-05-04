using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            var directory = Path.GetDirectoryName(Process.GetCurrentProcess().MainModule.FileName);
            string[] lines = System.IO.File.ReadAllLines($"{directory}/list.txt");

            var entries = lines.Length;
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

            var usedEntries = new List<int>();
            var sb = new StringBuilder();
            sb.Append("var menus = {");
            sb.AppendLine();
            for (var i = 0; i < days; i++)
            {
                int rInt;
                bool contained;
                do
                {
                    rInt = r.Next(0, entries);
                    if (rInt == entries) rInt--;
                    contained = usedEntries.Contains(rInt);
                    if (!contained) usedEntries.Add(rInt);
                } while (contained);
                var label = lines[rInt];
                label = label.Replace("'", "\\'");
                sb.Append($"{i + 1}: '{label}'");
                if (i < days - 1) sb.Append(", ");
                sb.AppendLine();
            }
            sb.Append("};");

            System.IO.File.WriteAllText($"{directory}/menus.js", sb.ToString());
        }
    }
}
