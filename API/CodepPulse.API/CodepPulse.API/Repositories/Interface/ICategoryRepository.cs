using CodepPulse.API.Models.Domain;

namespace CodepPulse.API.Repositories.Interface
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);
    }
}
