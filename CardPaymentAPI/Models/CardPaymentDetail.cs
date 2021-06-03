using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CardPaymentAPI.Models
{
    public class CardPaymentDetail
    {


        [Key]
        public int paymentDetailId { get; set; }



        [Column(TypeName = "nvarchar(100)")]
        public string cardOwnerName { get; set; }



        [Column(TypeName = "nvarchar(16)")]
        public string cardNumber { get; set; }




        [Column(TypeName = "nvarchar(5)")]
        public string expirationDate { get; set; }



        [Column(TypeName = "nvarchar(3)")]
        public string securityCode { get; set; }


    }
}
