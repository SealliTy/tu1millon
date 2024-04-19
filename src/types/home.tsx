import { Academic } from "@/images/icons/academic";
import { MasterClassIcon } from "@/images/icons/masterclass";
import { Tu1millon } from "@/images/icons/tu1millon";

export const dataHome = () => {
  const cardsHome: ICardHome[] = [
    {
      title: "Masterclass gratuita",
      description:
        "¡Prepárate para tranformar tu vida de una vez por todas! Este no es otro video de ventas. Te voy a guiar paso a paso para que comiences a GANAR. Te aseguro que, después de eso, ni siquiera querrás mirar a tus AMIGOS perdedores. ¡Es hora de tomar acción y conquitar tus metas!",
      href: "tu1millon/masterclass",
      icon: <MasterClassIcon styles="w-20 h-20 text-indigo-500" />,
    },
    {
      title: "Sala tu1millon",
      description:
        "¡Domina el arte del <b>Coaching Online</b> con la formación del jefazo <b>LLADOS</b>! Aprende de su éxito sin igual y prepárate para cambiar tu vida. ¡Únete al club y sigue sus pasos para comenzar a <b>GANAR</b>!",
      href: "tu1millon/room",
      icon: <Tu1millon styles="w-20 h-20 text-indigo-500" />,
    },
    {
      title: "Escuela tu1millon",
      description:
        "¡Únete para recibir coaching en vivo con el jefazo <b>LLADOS</b> y transformate en la mejor versión de ti mismo! Aprende a cambiar vidas con <b>Marketing de Afiliados</b> desde tu móvil y sin experiencia previa. ¡Escapa del sistema y alcanza el éxito hoy mismo!",
      href: "tu1millon/school",
      icon: <Academic styles="w-20 h-20 text-indigo-500" />,
    },
  ];
  return cardsHome;
};

export interface ICardHome {
  title: string;
  description: string;
  href: string;
  icon: React.JSX.Element;
}
