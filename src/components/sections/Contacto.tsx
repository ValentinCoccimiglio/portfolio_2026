import Container from "@/components/ui/Conteiner";
import SectionTitle from "@/components/ui/SectionTitle";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-28"
    >
      <Container>

        <SectionTitle
          eyebrow="CONTACTO"
          title="Trabajemos juntos."
          description="Si te interesa mi perfil, estaré encantado de conversar sobre cómo puedo aportar a tu equipo."
        />

        <div className="mx-auto mt-12 max-w-2xl text-center">

          <p className="text-lg leading-8 text-zinc-400">
            Me entusiasma formar parte de un equipo donde pueda seguir aprendiendo,
            aportar valor y construir productos digitales de calidad.
          </p>

          <p className="mt-6 text-zinc-500">
            Disponible Full time.
          </p>

          <a
            href="mailto:coccimigliovalentin11@gmail.com"
            className="
              mt-10
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-6
              py-3
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.03]
            "
          >
            <Mail size={18} />
            Enviar un correo
          </a>

          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">

            <a
              href="https://www.linkedin.com/in/valentin-coccimiglio-a87230345/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://github.com/ValentinCoccimiglio"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              <FaGithub size={22} />
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}