using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_agencia_viajes.Models
{
    public class Agencia
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int Nit { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string NombreAgencia { get; set; }
        [Required]
        [Column(TypeName = "varchar(10)")]
        public string TelefonoAgencia { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string DireccionAgencia { get; set; }

        public virtual ICollection<Hotel> AgenciaHoteles { get; set; }

        public Agencia()
        {
            AgenciaHoteles = new List<Hotel>();
        }
    }
}
