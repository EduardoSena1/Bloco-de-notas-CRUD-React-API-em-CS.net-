using MinhasNotasAPI.Domain.Entities;

namespace MinhasNotasAPI.Models
{
    public class NotaModel
    {
        public int Id { get; set; }
  
        public string Texto { get; set; } = string.Empty;
        public DateTime DataHora { get; set; }
        public bool Favorita { get; set; } 

        public NotaModel() { }

        public NotaModel(Nota nota)
        {
            Id = nota.Id;
            Texto = nota.Texto;
            DataHora = nota.DataHora;
            Favorita = nota.Favorita;
        }

        public Nota ToEntity()
        {
            return new Nota
            {
                Id = Id,
                Texto = Texto,
                DataHora = DataHora,
                Favorita = Favorita 
            };
        }
    }
}
