"use client"

const TestimonialForm = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
                {/* --- Nombre Completo --- */}
                <div className="col-lg-12">
                    <div className="contact__from-input mb-20">
                        <label>Nombre completo*</label>
                        <input type="text" placeholder="Ej: Juan Pérez" required />
                    </div>
                </div>

                {/* --- Correo Electrónico --- */}
                <div className="col-lg-6">
                    <div className="contact__from-input mb-20">
                        <label>Correo electrónico*</label>
                        <input type="email" placeholder="ejemplo@correo.com" required />
                    </div>
                </div>

                {/* --- Teléfono --- */}
                <div className="col-lg-6">
                    <div className="contact__from-input mb-20">
                        <label>Teléfono*</label>
                        <input type="tel" placeholder="Ej: 11 1234 5678" required />
                    </div>
                </div>

                {/* --- Consulta o Comentario (Área de Texto) --- */}
                <div className="col-lg-12">
                    <div className="contact__from-input mb-20">
                        <label>Consulta o comentario</label>
                        <textarea placeholder="Escribe tu mensaje aquí..." rows={5}></textarea>
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