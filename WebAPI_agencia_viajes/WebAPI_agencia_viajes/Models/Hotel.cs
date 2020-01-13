using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_agencia_viajes.Models
{
    public class Hotel
    {
        [Key]
        public int Id { get; set; }
        public virtual Agencia Agencia { get; set; }
        public int AgenciaId { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Nit { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string NombreHotel { get; set; }
        [Required]
        [Column(TypeName = "varchar(10)")]
        public string TelefonoHotel { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string DireccionHotel { get; set; }
        [Required]
        [Column(TypeName = "varchar(15)")]
        public string Estado { get; set; }
    }
}
