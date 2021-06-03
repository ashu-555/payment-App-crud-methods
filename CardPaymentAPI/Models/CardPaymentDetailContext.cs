using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardPaymentAPI.Models
{
    public class CardPaymentDetailContext : DbContext
    {
        public CardPaymentDetailContext(DbContextOptions<CardPaymentDetailContext> options) : base(options)

        {

        }
        public DbSet<CardPaymentDetail> paymentDetaild { get; set; }
    }
}
