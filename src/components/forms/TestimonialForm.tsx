"use client"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 1. Define la estructura de los datos del formulario
interface FormData {
    nombre_completo: string;
    email: string;
    telefono: string;
    tipo_servicio: string;
    mensaje?: string; // El '?' lo hace opcional
}

// 2. Crea las reglas de validación con yup
const schema = yup.object({
    nombre_completo: yup.string().required("El nombre es obligatorio."),
    email: yup.string().required("El correo es obligatorio.").email("Debe ser un correo válido."),
    telefono: yup.string().required("El teléfono es obligatorio."),
    tipo_servicio: yup.string().required("Debes seleccionar un servicio."),
    mensaje: yup.string(),
}).required();


const TestimonialForm = () => {
    // 3. Inicializa react-hook-form y conecta las reglas de yup
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    // 4. Esta es la función que se ejecuta CUANDO la validación es exitosa
    const onSubmit = (data: FormData) => {
        console.log("Datos del formulario validados:", data);
        
        // --- AQUÍ IRÍA LA LÓGICA PARA ENVIAR EL CORREO ---
        // Por ejemplo, aquí llamarías a EmailJS, a tu API, etc.
        // Como no sabemos cuál usar, por ahora solo mostramos un mensaje de éxito.

        toast.success('¡Consulta recibida! Nos pondremos en contacto pronto.');
        reset(); // Limpia el formulario
    };

    return (
        // 5. Conecta handleSubmit al evento onSubmit del formulario
        <form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer position="bottom-right" />
            <div className="row">
                {/* --- Nombre Completo --- */}
                <div className="col-lg-12">
                    <div className="contact__from-input mb-20">
                        <label>Nombre completo*</label>
                        <input type="text" {...register("nombre_completo")} placeholder="Ej: Juan Pérez" />
                        <p className="form_error">{errors.nombre_completo?.message}</p>
                    </div>
                </div>

                {/* --- Correo Electrónico --- */}
                <div className="col-lg-6">
                    <div className="contact__from-input mb-20">
                        <label>Correo electrónico*</label>
                        <input type="email" {...register("email")} placeholder="ejemplo@correo.com" />
                        <p className="form_error">{errors.email?.message}</p>
                    </div>
                </div>

                {/* --- Teléfono --- */}
                <div className="col-lg-6">
                    <div className="contact__from-input mb-20">
                        <label>Teléfono*</label>
                        <input type="tel" {...register("telefono")} placeholder="Ej: 11 1234 5678" />
                        <p className="form_error">{errors.telefono?.message}</p>
                    </div>
                </div>


                {/* --- Consulta o Comentario (Área de Texto) --- */}
                <div className="col-lg-12">
                    <div className="contact__from-input mb-20">
                        <label>Consulta o comentario</label>
                        <textarea {...register("mensaje")} placeholder="Escribe tu mensaje aquí..." rows={5}></textarea>
                    </div>
                </div>

                {/* --- Botón de Envío --- */}
                <div className="col-12">
                    <div className="testimonials_btn text-center">
                        <button type="submit" className="primary-btn-4 btn-hover">
                            ENVIAR CONSULTA
                            <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default TestimonialForm;