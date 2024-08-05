import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { useState } from "react";
import { json, redirect } from '@remix-run/node'
import { Form } from "@remix-run/react";

import { FormField } from "~/components/form-field";
import { validateEmail } from "~/utils/validator.server";
import { register } from "~/utils/auth.server";
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
    const action = form.get("_action");
    const email = form.get("email");


    // If not all data was passed, error
    if (typeof email !== "string" ) {
        return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
    }


    // Validate email & password
    const errors = {
        email: validateEmail(email) 
    };

    //  If there were any errors, return them
    if (Object.values(errors).some(Boolean))
        return json({ errors, fields: { email }, form: action }, { status: 400 });
    return await register({ email })

}
export const meta: MetaFunction = () => {
  return [
    { title: "Los Bacteria" },
    { name: "Ideas Contagiosas", content: "Los Bacteria" },
  ];
};

export default function Index() {

  const [formData, setFormData] = useState({
    email: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData(form => ({ ...form, [field]: event.target.value }))
  }

  return (
    <main>
    <div className="font-kiffoR flex align-left justify-start  bg-dark">
      <div className="flex flex-col gap-3 xs:p-5 md:p-6  text-2xl">
      <p className="text-primary ">Si estás leyendo esto, felicidades, oficialmente has sido infectado. Ya no hay vuelta atrás. Lo único que te queda, es dejar tu correo para enterarte de lo que viene.  </p>
        <Form reloadDocument method="POST" className="flex flex-col gap-2">

        <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={e => handleInputChange(e, 'email')}
          />
          {/* <input placeholder="Tu correo aquí" className="w-[220px] bg-dark border-primary text-primary border-b color-[rgba(200, 255, 0, 0.25)] p-[5px] "/> */}
          <button  type="submit" name="_action" value="register" className="text-primary w-fit	 text-2xl leading-6	underline	" >Notificame</button>
        </Form> 
      </div>


    </div>
    </main>

  );
}
