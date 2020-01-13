using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_agencia_viajes.Models
{
    public class AgenciaViajesContext: DbContext
    {
        public AgenciaViajesContext(DbContextOptions<AgenciaViajesContext> options): base(options)
        {
        }

        public DbSet<Agencia> Agencia { get; set; }
        public DbSet<TipoHabitacion> TipoHabitacion { get; set; }
        public DbSet<Hotel> Hotel { get; set; }
    }
}
