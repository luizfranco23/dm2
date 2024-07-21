"use client";
import CardStore from "@/components/Card";
import "../styles/index.css";
import Header from "@/components/Header";

const stores = [
  { storeName: "Vila Velha - ES", whatsApp: "https://api.whatsapp.com/send/?phone=5527997064770&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%21+&type=phone_number&app_absent=0" },
  { storeName: "Cachoeiro de Itapemirim - ES", whatsApp: "https://api.whatsapp.com/send/?phone=5528999350204&text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta&type=phone_number&app_absent=0" },
  { storeName: "Vitória - ES", whatsApp: "https://api.whatsapp.com/send?phone=5527996506219&text=Ola,%20quero%20saber%20sobre%20o%20tratamento%20da%20diabetes%20na%20Clinica%20de%20Vit%C3%B3ria" },
  { storeName: "Lapa - SP", whatsApp: "https://wa.me/5511952702397" },
  { storeName: "S. J. do Rio Preto - SP", whatsApp: "https://api.whatsapp.com/send/?phone=5517996811638&text&type=phone_number&app_absent=0" },
  { storeName: "Santo Amaro - SP", whatsApp: "https://wa.me/5511970226970" },
  { storeName: "Marília - SP", whatsApp: "https://api.whatsapp.com/send/?phone=5514996441401&text&type=phone_number&app_absent=0" },
];

export default function Home() {
  return (
    <main className="scrollable-container">
      <div className="container">
        <Header />
        {stores.map((store, index) => (
          <CardStore
            key={index}
            storeName={store.storeName}
            whatsApp={store.whatsApp}
          />
        ))}
      </div>
    </main>
  );
}
