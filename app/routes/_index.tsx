import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import { json } from '@remix-run/node'
import { Form } from "@remix-run/react";
import { useActionData } from '@remix-run/react'

import { FormField } from "~/components/form-field";
import { validateEmail } from "~/utils/validator.server";
import { register } from "~/utils/auth.server";
import { Layout } from "~/components/layout";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action");
  const email = form.get("email");

  // If not all data was passed, error
  if (typeof email !== "string") {
    return json({ error: `El correo que escribiste no es válido. Intentalo de nuevo.`, form: action }, { status: 400 });
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

  const data = useActionData<typeof action>();
  const firstLoad = useRef(true)
  const [errors, setErrors] = useState(data?.errors || {})
  const [formError, setFormError] = useState(data?.error || '')


  const [formData, setFormData] = useState({
    email: data?.fields?.email || ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData(form => ({ ...form, [field]: event.target.value }))
  }

  useEffect(() => {
    // Clear the form if we switch forms
    if (!firstLoad.current) {
      const newState = {
        email: ''
      }
      setErrors(newState)
      setFormError('')
      setFormData(newState)
    }
  }, [])

  useEffect(() => {
    if (!firstLoad.current) {
      setFormError('')
    }
  }, [formData])

  useEffect(() => {
    firstLoad.current = false
  }, [data])

  return (
    <Layout>
      <main>
        <div className="font-kiffoR flex align-left justify-start">
          <div className="flex flex-col gap-3 xs:p-5 md:p-6  text-2xl">
            <p className="text-primary ">Si estás leyendo esto, felicidades, oficialmente te hemos infectado. Ya no hay vuelta atrás. Podés ver el catálogo de nuestros productos <a href="./static/bacteria_menu.pdf"  target="_blank" rel="noopener noreferrer" className="underline">aquí</a> o escribirnos a nuestro <a className="underline" href="mailto:infectados@losbacteria.com">correo aquí</a>. También podés dejarnos tu correo para enterarte de lo que viene.  </p>
            <Form reloadDocument method="post" className="flex flex-col gap-2">

              <FormField
                htmlFor="email"
                label="Email"
                value={formData.email}
                onChange={e => handleInputChange(e, 'email')}
                error={errors?.email}

              />
              <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full ">
                {formError}
              </div>
              <button type="submit" name="_action" value="register" className="text-primary w-fit	 text-2xl leading-6	underline	" >Notificame</button>
            </Form>
          </div>


        </div>
      </main>
    </Layout>


  );
}
