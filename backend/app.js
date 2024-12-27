import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { sendEmail } from './utils/sendEmail.js';

config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL;

// Middleware CORS
app.use(cors({
    origin: FRONTEND_URL, // Permite apenas o frontend local
    methods: ["GET", "POST"],
    credentials: true, // Se você estiver usando cookies ou autenticação
}));

// Outros middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota
app.post("/send/mail", async (req, res) => {
    const { name, email, message } = req.body;

    // Validação de campos
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Por favor, preencha todos os campos.",
        });
    }

    try {
        await sendEmail({
            email: "joaogabriell.ssm@gmail.com",
            subject: "GYM WEBSITE CONTACT",
            message: `Mensagem: ${message}\n\nEmail do usuário: ${email}`,
            userEmail: email,
        });

        res.status(200).json({
            success: true,
            message: "Mensagem enviada com sucesso.",
        });
    } catch (error) {
        console.error("Erro no envio do email:", error.message || error);
        res.status(500).json({
            success: false,
            message: "Erro interno do servidor. Tente novamente mais tarde.",
        });
    }
});

// Habilita resposta para requisições OPTIONS (Preflight Request)


// Inicie o servidor
app.listen(PORT, () => {
    console.log("Servidor rodando na porta:", PORT);
});
