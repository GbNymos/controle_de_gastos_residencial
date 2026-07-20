namespace Person.Controllers
{

    public static class PersonController
    {

      public static void Persons(this WebApplication app)
        {
            app.MapGet(pattern:"Person",() => "ola pessoa");
        } 

    }
}