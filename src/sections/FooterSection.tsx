"use client";

import { fadeInLeft, fadeInRight } from "@/animations/scrollAnimations";
import AndroidEmail from "@/assets/elements/email-android.svg";
import TopWave from "@/assets/elements/TopWave";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useSound } from "@/contexts/SoundContext";
import { useForm } from "@formspree/react";
import { AnimatePresence, motion } from "framer-motion";
import { InstagramIcon, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function FooterSection() {
    const [
        emailIllustrationHoverAnimation,
        setEmailIllustrationHoverAnimation,
    ] = useState(false);
    const [githubLinkButtonAnimation, setGithubButtonAnimation] =
        useState(false);
    const [instagramLinkAnimation, setInstagramLinkAnimation] = useState(false);
    const [linkedinLinkAnimation, setLinkedinLinkAnimation] = useState(false);
    const [buttonIsLoading, setButtonIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [message, setMessage] = useState("");

    const [state, handleSubmit] = useForm("xjkgjvja");

    const { slimeLandSound, slimeDeathSound, bubbleSound } = useSound();

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setButtonIsLoading(true);

        try {
            await handleSubmit(e);

            if (state.succeeded) {
                setShowToast(true);
                bubbleSound?.play();

                setClientName("");
                setClientEmail("");
                setMessage("");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setButtonIsLoading(false);

            setTimeout(() => {
                setShowToast(false)
            }, 8000)
        }
    };

    return (
        <>
            <footer>
                <TopWave className="fill-foreground-primary pointer-events-none select-none" />

                <div className="bg-foreground-primary pt-6">
                    <div
                        className="max-w-6xl mx-auto px-6 pb-10 flex flex-col-reverse md:flex-1 md:flex-row items-center justify-center md:gap-8 xl:gap-44 scroll-p-80"
                        id="contact"
                    >
                        <motion.form
                            {...fadeInLeft(20, 0.3, 1)}
                            className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5"
                            onSubmit={onSubmit}
                        >
                            <h3 className="text-4xl text-font-primary font-inter font-bold mb-6">
                                Entre em contato comigo
                            </h3>
                            <div className="space-y-4">
                                <Input
                                    label="Nome"
                                    placeholder="John Doe"
                                    name="name"
                                    value={clientName}
                                    onChange={(e) =>
                                        setClientName(e.target.value)
                                    }
                                />
                                <Input
                                    label="E-mail"
                                    name="email"
                                    value={clientEmail}
                                    placeholder="johndoe@exemplo.com"
                                    maxLength={100}
                                    onChange={(e) =>
                                        setClientEmail(e.target.value)
                                    }
                                />
                                <TextArea
                                    label="Mensagem"
                                    name="message"
                                    value={message}
                                    placeholder="Olá, gostaria de falar sobre..."
                                    maxLength={300}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <Button
                                    isLoading={buttonIsLoading}
                                    className="w-full"
                                    type="submit"
                                >
                                    Enviar
                                </Button>
                            </div>
                        </motion.form>
                        <motion.div
                            {...fadeInRight(20, 0.3, 1)}
                            className="flex md:flex flex-col items-center"
                        >
                            <Image
                                onMouseEnter={() => {
                                    setEmailIllustrationHoverAnimation(true);
                                    slimeDeathSound?.play();
                                }}
                                onAnimationEnd={() =>
                                    setEmailIllustrationHoverAnimation(false)
                                }
                                src={AndroidEmail}
                                alt="Imagem de envelopes que representam um e-mail com o tema, cores, e o icone do android."
                                className={`w-auto cursor-pointer ${
                                    emailIllustrationHoverAnimation
                                        ? "animate-gelatine"
                                        : ""
                                }`}
                            />
                            <a
                                data-tooltip-id="open-email-tooltip"
                                data-tooltip-content="Enviar e-mail"
                                href="mailto:contato@luizleal.dev"
                                target="_blank"
                                className="hidden md:flex gap-2 transition-all duration-200 hover:text-primary-blue dark:hover:text-font-primary"
                            >
                                <Mail strokeWidth={1.5} className="w-5" />
                                contato@luizleal.dev
                            </a>

                            <Tooltip
                                id="open-email-tooltip"
                                style={{
                                    backgroundColor: "var(--tooltip-bg)",
                                    color: "var(--tooltip-text-color)",
                                    padding: "5px 10px",
                                    borderRadius: "6px",
                                }}
                                delayShow={500}
                                place="bottom"
                            />
                        </motion.div>
                    </div>
                    <div className="h-px w-full bg-foreground-secondary"></div>
                    <div className="max-w-6xl mx-auto p-6 flex gap-4 max-[400px]:items-center max-[400px]:flex-col justify-between">
                        <p>
                            <span className="font-inter"> &#169; </span>
                            Luiz André Leal · 2025
                        </p>
                        <div className="flex gap-2 fill-font-color">
                            <a
                                data-tooltip-id="footer-socialmedia-link-tooltip"
                                data-tooltip-content="Github"
                                onMouseEnter={() => {
                                    setGithubButtonAnimation(true);
                                    slimeLandSound?.play();
                                }}
                                onAnimationEnd={() =>
                                    setGithubButtonAnimation(false)
                                }
                                href="https://github.com/luizlealdev"
                                target="_blank"
                            >
                                <GithubIcon
                                    className={`fill-font-color hover:fill-primary-blue dark:hover:fill-font-primary w-6 ${
                                        githubLinkButtonAnimation
                                            ? "animate-gelatine"
                                            : ""
                                    }`}
                                />
                            </a>
                            <a
                                data-tooltip-id="footer-socialmedia-link-tooltip"
                                data-tooltip-content="Instagram"
                                onMouseEnter={() => {
                                    setInstagramLinkAnimation(true);
                                    slimeLandSound?.play();
                                }}
                                onAnimationEnd={() =>
                                    setInstagramLinkAnimation(false)
                                }
                                href="https://www.instagram.com/luizleal.dev/"
                                target="_blank"
                                className="hover:animate-gelatine"
                            >
                                <InstagramIcon
                                    className={`hover:text-primary-blue dark:hover:text-font-primary w-5 ${
                                        instagramLinkAnimation
                                            ? "animate-gelatine"
                                            : ""
                                    }`}
                                />
                            </a>
                            <a
                                data-tooltip-id="footer-socialmedia-link-tooltip"
                                data-tooltip-content="LinkedIn"
                                onMouseEnter={() => {
                                    setLinkedinLinkAnimation(true);
                                    slimeLandSound?.play();
                                }}
                                onAnimationEnd={() =>
                                    setLinkedinLinkAnimation(false)
                                }
                                href="https://www.linkedin.com/in/luizlealdev"
                                target="_blank"
                            >
                                <LinkedInIcon
                                    className={`fill-font-color hover:fill-primary-blue dark:hover:fill-font-primary w-6 ${
                                        linkedinLinkAnimation
                                            ? "animate-gelatine"
                                            : ""
                                    }`}
                                />
                            </a>

                            <Tooltip
                                id="footer-socialmedia-link-tooltip"
                                style={{
                                    backgroundColor: "var(--tooltip-bg)",
                                    color: "var(--tooltip-text-color)",
                                    padding: "5px 10px",
                                    borderRadius: "6px",
                                }}
                                place="top"
                            />
                        </div>
                    </div>
                </div>
            </footer>
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        key="toast"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="fixed bottom-5 right-5 flex items-center w-full max-w-xs p-4 bg-background border border-foreground-primary rounded-lg shadow-md"
                    >
                        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-primary-green-light bg-green-500/10 rounded-lg">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                            Mensagem enviada com sucesso!
                        </div>
                        <button
                            onClick={() => setShowToast(false)}
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 hover:text-primary-blue dark:hover:text-font-primary hover:bg-foreground-primary rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8"
                            aria-label="Fechar"
                        >
                            <span className="sr-only">Dispensar</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
