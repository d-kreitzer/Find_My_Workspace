using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DIS6225_FinalProject_MVC.Models;

namespace DIS6225_FinalProject_MVC.Data
{
    public class DIS6225_FinalProject_MVCContext : DbContext
    {
        public DIS6225_FinalProject_MVCContext (DbContextOptions<DIS6225_FinalProject_MVCContext> options)
            : base(options)
        {
        }

        public DbSet<DIS6225_FinalProject_MVC.Models.Location> Location { get; set; } = default!;
        public DbSet<DIS6225_FinalProject_MVC.Models.Review> Review { get; set; } = default!;
    }
}
