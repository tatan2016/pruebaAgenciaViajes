using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_agencia_viajes.Models
{
    public class TipoHabitacion
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string NombreTipo { get; set; }
        [Column(TypeName = "varchar(150)")]
        public string DescripcionTipo { get; set; }
    }
}
