using System;
using System.Collections.Generic;

#nullable disable

namespace App.Models
{
    public partial class Recommendation
    {
        public int Id { get; set; }
        public int? IdFilm { get; set; }
        public string Description { get; set; }

     
    }
}
