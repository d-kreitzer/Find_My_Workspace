using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DIS6225_FinalProject_MVC.Data;
using DIS6225_FinalProject_MVC.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<DIS6225_FinalProject_MVCContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DIS6225_FinalProject_MVCContext") ?? throw new InvalidOperationException("Connection string 'DIS6225_FinalProject_MVCContext' not found.")));

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Process the seed data for the database with error handling
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        SeedData.Initialize(services);
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred seeding the DB.");
    }
}


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
