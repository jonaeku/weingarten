import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({});
    const [isActive, setIsActive] = useState(false);

    async function handleOnSubmit(e) {
        e.preventDefault();

        if (!formData.email) {
            alert("Bitte geben Sie beim Senden einer Anfrage Ihre Email an!");
            return;
        } else {
            await fetch("/mail", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            setFormData({
                name: "",
                email: "",
                personCount: "",
                date: "",
                time: "",
                message: "",
            });
            setIsActive((current) => !current);
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <title>Termin</title>
                <meta name="description" content="Termin anfragen!" />
                <link rel="icon" href="/favicon.ico" />
            </div>

            <div className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Termin anfragen</h1>
                    <p>(Ihre unverbindliche Anfrage wird per Mail an uns gesendet)</p>
                </div>
                <div className={styles.mailContainer}>
                    <form onSubmit={handleOnSubmit}>
                        <div className={styles.grid}>
                            <p>
                                <label htmlFor="name">Name</label>
                                <br />
                                <input
                                    className={styles.input}
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </p>
                            <p>
                                <label htmlFor="email">Email</label>
                                <br />
                                <input
                                    className={styles.input}
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                            </p>
                            <p>
                                <label htmlFor="personCount">Anzahl Personen</label>
                                <br />
                                <input
                                    className={styles.input}
                                    id="personCount"
                                    type="number"
                                    name="personCount"
                                    min="0"
                                    max="500"
                                    value={formData.personCount}
                                    onChange={(e) =>
                                        setFormData({ ...formData, personCount: e.target.value })
                                    }
                                />
                            </p>
                            <p>
                                <label htmlFor="date">Datum</label>
                                <br />
                                <input
                                    className={styles.input}
                                    id="date"
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={(e) =>
                                        setFormData({ ...formData, date: e.target.value })
                                    }
                                />
                            </p>
                            <p>
                                <label htmlFor="message">Sonstiges</label>
                                <br />
                                <input
                                    className={styles.input}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                            </p>
                            <button
                                className={isActive ? styles.submitActive : styles.submit}
                            >
                                {isActive ? "Gesendet" : "Senden"}
                            </button>
                        </div>
                    </form>
                    {isActive ? <p className={styles.sendInfo}>Anfrage erfolgreich versendet!</p> : ""}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;