
export const MASKAPAI = {
    GRD:{
        maskapai_id: "GRD",
        maskapai_nama: "Garuda Airline",
        maskapai_logo: "../images/garuda.jpg", 
    },
    SJW:{
        maskapai_id: "SJW",
        maskapai_nama: "Seriwijaya Air",
        maskapai_logo: "../images/Sriwijaya_air.png", 
    },
    LIO:{
        maskapai_id: "LIO",
        maskapai_nama: "Lion Air",
        maskapai_logo: "../images/lion_air.png", 
    },
    CRD:{
        maskapai_id: "CRD",
        maskapai_nama: "Cardig Air",
        maskapai_logo: "../images/Cardig_Air.png",
    },
    SAJ:{
        maskapai_id: "SAJ",
        maskapai_nama: "PT-Super Air Jet",
        maskapai_logo: "../images/Super_Air.png",
    },
    CTL:{
        maskapai_id: "CTL",
        maskapai_nama: "Citilink",
        maskapai_logo: "../images/citilink.png",
    },
};

export const BANDARA = {
    SKH:{
        bandara_kode: "SKH",
        bandara_nama: "Soekarno Hatta",
    },
    RDN:{
        bandara_kode: "RDN",
        bandara_nama: "Raden Intan",
    },
    NGR:{
        bandara_kode: "NGR",
        bandara_nama: "Ngurah Rai",
    },
    JND:{
        bandara_kode: "JND",
        bandara_nama: "Juanda",
    },
    UFM:{
        bandara_kode: "UFM",
        bandara_nama: "Fatmawati Soekarno",
    },
    SIM:{
        bandara_kode: "SIM",
        bandara_nama: "Sultan Iskandar Muda",
    },
};

export const JADWAL = [
    {
        jadwal_id: "1",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "2",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "NGR",
        maskapai_id: "LIO"
    },
    {
        jadwal_id: "3",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "NGR",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "4",
        bandara_kode_keberangkatan: "NGR",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "5",
        bandara_kode_keberangkatan: "JND",
        bandara_kode_tujuan: "UFM",
        maskapai_id: "CTL"
    },
    {
        jadwal_id: "6",
        bandara_kode_keberangkatan: "JND",
        bandara_kode_tujuan: "SIM",
        maskapai_id: "CRD"
    },
    {
        jadwal_id: "7",
        bandara_kode_keberangkatan: "UFM",
        bandara_kode_tujuan: "SIM",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "8",
        bandara_kode_keberangkatan: "NGR",
        bandara_kode_tujuan: "UFM",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "9",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "SIM",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "10",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "UFM",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "11",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "UFM",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "12",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "13",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "CTL"
    },
    {
        jadwal_id: "14",
        bandara_kode_keberangkatan: "UFM",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "CRD"
    },
    {
        jadwal_id: "15",
        bandara_kode_keberangkatan: "SIM",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "16",
        bandara_kode_keberangkatan: "SIM",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "17",
        bandara_kode_keberangkatan: "SIM",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "CTL"
    },
    {
        jadwal_id: "18",
        bandara_kode_keberangkatan: "SIM",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "19",
        bandara_kode_keberangkatan: "SIM",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "CRD"
    },
    {
        jadwal_id: "20",
        bandara_kode_keberangkatan: "SIM",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "SJW"
    },

];