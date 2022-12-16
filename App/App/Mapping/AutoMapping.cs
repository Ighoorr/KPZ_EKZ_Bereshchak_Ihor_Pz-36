using App.Models;
using App.ViewModels;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Mapping
{
    public class AutoMapping:Profile
    {
        public AutoMapping()
        {
            CreateMap<Film, ViewFilm>();
            CreateMap<ViewFilm, Film>();

            CreateMap<Recommendation, ViewRecommendation>();
            CreateMap<ViewRecommendation, Recommendation>();
        }
    }
}
