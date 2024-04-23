using DIS6225_FinalProject_MVC.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DIS6225_FinalProject_MVC.Data;
using System;
using System.Linq;


namespace DIS6225_FinalProject_MVC.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DIS6225_FinalProject_MVCContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<DIS6225_FinalProject_MVCContext>>()))
            {
                // Look for any movies.
                if (context.Location.Any())
                {
                    return;   // DB has been seeded
                }
                context.Location.AddRange(
                    new Location { LocationID = 1, Name = "Armature Works", Address = "1910 N Ola Ave, Tampa, FL 33602", City = "Tampa", Type = "Food court" },
                    new Location { LocationID = 2, Name = "Buddy Brew Coffee", Address = "Hyde Park, 1605 W Snow Ave, Tampa, FL 33606", City = "Tampa", Type = "Coffee shop" },
                    new Location { LocationID = 3, Name = "Sparkman Wharf", Address = "615 Channelside Dr, Tampa, FL 33602", City = "Tampa", Type = "Plaza" },
                    new Location { LocationID = 4, Name = "Felicitous (on 51st)", Address = "11706 N 51st St, Tampa, FL 33617", City = "Tampa", Type = "Coffee shop" },
                    new Location { LocationID = 5, Name = "Hyde Park Village", Address = "1602 W Swann Ave, Tampa, FL 33606", City = "Tampa", Type = "Shopping mall" },
                    new Location { LocationID = 6, Name = "Achilles Art Cafe (Wilshire)", Address = "2869 Wilshire Dr STE 103, Orlando, FL 32835", City = "Orlando", Type = "Coffee shop" },
                    new Location { LocationID = 7, Name = "Qreate Coffee + Studio", Address = "1212 Woodward St #1, Orlando, FL 32803", City = "Orlando", Type = "Coffee shop" },
                    new Location { LocationID = 8, Name = "SnowBean", Address = "5310 E Colonial Dr, Orlando, FL 32807", City = "Orlando", Type = "Cafe" },
                    new Location { LocationID = 9, Name = "Haan Coffee", Address = "1235 E Colonial Dr, Orlando, FL 32803", City = "Orlando", Type = "Coffee shop" },
                    new Location { LocationID = 10, Name = "Intermezzo", Address = "1111 Central Ave, St. Petersburg, FL 33705", City = "St. Petersburg", Type = "Cocktail bar" },
                    new Location { LocationID = 11, Name = "Bandit Coffee Co.", Address = "2662 Central Ave, St. Petersburg, FL 33712", City = "St. Petersburg", Type = "Cafe" },
                    new Location { LocationID = 12, Name = "Grassroots Kava House", Address = "957 Central Ave, St. Petersburg, FL 33705", City = "St. Petersburg", Type = "Coffee shop" },
                    new Location { LocationID = 13, Name = "Restoration Cafe", Address = "38 N Fort Harrison Ave, Clearwater, FL 33755", City = "Clearwater", Type = "Coffee shop" },
                    new Location { LocationID = 14, Name = "Downtown Expresso Cafe and Lounge", Address = "639 Cleveland St Suite 101, Clearwater, FL 33755", City = "Clearwater", Type = "Coffee shop" },
                    new Location { LocationID = 15, Name = "Another Broken Egg Cafe", Address = "2554 McMullen Booth Rd, Clearwater, FL 33761", City = "Clearwater", Type = "Brunch restaurant" }
                );
                context.SaveChanges();
            }
        }
    }
}
