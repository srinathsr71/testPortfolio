import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sanjay Bhatia',
            role: 'CEO',
            company: 'Runday.ai',
            avatar: 'SS',
            color: '#00d9ff',
            rating: 5,
            url: 'https://www.linkedin.com/in/datasanj/',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQGiWZUaSxhbsA/profile-displayphoto-scale_400_400/B4EZuvsAeTGcAg-/0/1768179108263?e=1774483200&v=beta&t=x4EbCUs3YpbrhuNYf3HNCmJEeFbRWNL6avjNK64ttT8',
            text: 'Srinath consistently delivered thorough test coverage that caught issues we would have otherwise missed in production. His attention to edge cases and ability to write clear, reproducible bug reports made our development cycles significantly more predictable. A true quality champion on our team',
        },
        {
            name: 'Swathi Bharadwaj',
            role: 'Test Manager',
            company: 'Moolya',
            avatar: 'S',
            color: '#8b5cf6',
            rating: 5,
            url: 'https://www.linkedin.com/in/swathibharadwaj/',
            image: 'https://media.licdn.com/dms/image/v2/C5603AQG3ignPDvpFcA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1617950163312?e=2147483647&v=beta&t=P3i7RZEsUV9CLV9KUTvO6GSaudqjdYDgDZDK3UroQmg',
            text: 'Working with Srinath was a pleasure. He doesn\'t just execute test cases — he thinks deeply about the user journey and asks the right questions during requirement reviews. His API testing skills and ability to use tools like Postman and Charles Proxy made our backend validation process much stronger.'
        }
    ];

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Testimonials
                </motion.h2>
                <motion.p
                    className="testimonials-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    What colleagues and managers say
                </motion.p>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            style={{ '--t-color': t.color }}
                        >
                            <div className="quote-icon">
                                <Quote size={22} />
                            </div>

                            <p className="testimonial-text">{t.text}</p>

                            <div className="testimonial-rating">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>

                            <div className="testimonial-author">
                                {t.image ? (
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="author-avatar"
                                        style={{ objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div
                                        className="author-avatar"
                                        style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                                    >
                                        {t.avatar}
                                    </div>
                                )}
                                <div className="author-info">
                                    <a href={t.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <span className="author-name">{t.name}</span>
                                    </a>
                                    <span className="author-role">{t.role} · {t.company}</span>
                                </div>
                            </div>

                            <div className="testimonial-accent" style={{ background: t.color }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
