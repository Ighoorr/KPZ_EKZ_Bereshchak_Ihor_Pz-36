using System;
using System.Collections.Generic;

#nullable disable

namespace App.Models
{
    public partial class Film
    {
        public Film()
        {
          
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public string Genre { get; set; }

      
    }
}
