//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace APIProjectOnlineShopping.Models
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;

    [DataContract]

    public partial class OTP
    {
        [DataMember]

        public int ID { get; set; }
        [DataMember]

        public string OTP1 { get; set; }
        [DataMember]

        public Nullable<int> UserID { get; set; }
    
        public virtual UserTable UserTable { get; set; }
    }
}
