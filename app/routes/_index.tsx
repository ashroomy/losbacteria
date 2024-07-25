import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "Los Bacteria" },
    { name: "Ideas Contagiosas", content: "Los Bacteria" },
  ];
};

export default function Index() {
  return (
    <main>
    <div className="font-kiffoR flex align-middle justify-center  bg-#1E1E1E">
      <div className="flex flex-col gap-3 xs:p-5 md:p-6 md:max-w-[600px] ">
      <p className="text-primary text-25">Si estás leyendo esto, felicidades, oficialmente has sido infectado. Ya no hay vuelta atrás. Lo único que te queda, es dejar tu correo para enterarte de lo que viene.  </p>
        <form className="flex flex-col gap-2">
          <input placeholder="Tu correo aqui" className="w-[220px] bg-dark border-primary text-primary border "/>
          <button className="text-primary w-fit	 text-25" type="submit">Notificame</button>
        </form> 
      </div>


    </div>
    </main>

  );
}
