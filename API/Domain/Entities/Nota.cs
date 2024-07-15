namespace MinhasNotasAPI.Domain.Entities
{
    public class Nota
    {
        public int Id { get; set; }
   
        public string Texto { get; set; } = string.Empty;
        public DateTime DataHora { get; set; } = DateTime.UtcNow;
        public bool Favorita { get; set; }
        public string CorBackground { get; set; }

        public Nota() { }
    }
}
