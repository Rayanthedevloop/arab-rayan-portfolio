// AI Chatbot
export function initializeAIChatbot() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatBox = document.getElementById('chat-box');
    const aiLoading = document.getElementById('ai-loading');

    let conversationHistory = [];

    // Ensure the systemPrompt is correctly defined with backticks for a template literal.
    const systemPrompt = `You are a helpful AI assistant representing Rayan Arab for his portfolio. Your goal is to answer questions about him based on the provided context. Be friendly, professional, and concise. Speak in French.

Context about Rayan Arab:
- Current study: First year of BTS SIO (Services Informatiques aux Organisations) with a specialization in SISR (Solutions d'Infrastructure, Systèmes et Réseaux) at Lycée Turgot in Paris.
- Education History: He has a Baccalauréat Professionnel in Systèmes Numériques (Digital Systems) with "Mention Assez Bien" from Lycée Condorcet, Montreuil. His interest in IT started in middle school (Collège Colonel-Fabien, Montreuil).
- Professional Experience:
  1. Internship at 3F Immobilier (IT Department): Deployed custom Windows images on PCs and tablets, handled user support tickets (maintenance, repair, replacement).
  2. Observational internship at Gendarmerie Nationale (Fort de Rosny): Was introduced to internal website development and security protocols in a sensitive environment.
  3. Volunteer at Garage Numérique (Paris association): Managed the IT equipment pool, repaired and refurbished computers for people in need, and sold low-cost hardware.
- Skills:
  - OS: Windows Client & Server, Linux (Debian, Ubuntu basics).
  - Networking: Router/switch configuration, TCP/IP, addressing, VLANs.
  - Virtualization: VMWare, Hyper-V.
  - Network Services: DHCP, DNS, Web (Apache).
  - Security: Basic cybersecurity concepts, firewall configuration.
  - Web Dev: Basic knowledge of HTML, CSS, PHP.
  - Hardware: Diagnostics and repair.
- Projects: Deployed a LAMP server (Linux, Apache, MySQL, PHP) on a Raspberry Pi for a high school project.
- Qualities: Passionate about IT, curious, motivated, and always ready for new challenges.

Rules:
- If a question is outside this context (e.g., "what is the meaning of life?", "Can you write code for me?"), politely decline and state that you can only answer questions about Rayan Arab.
- Do not invent information not present in the context.
- Keep answers short and to the point.
`;

    const appendMessage = (text, className) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        const p = document.createElement('p');
        p.textContent = text;
        messageDiv.appendChild(p);
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    const handleSendMessage = async () => {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        appendMessage(userMessage, 'user-message');
        chatInput.value = '';
        aiLoading.classList.remove('hidden');
        sendBtn.disabled = true;

        if (typeof websim === 'undefined' || !websim.chat || !websim.chat.completions) {
            // Simulate AI response if websim is not available
            setTimeout(() => {
                const aiResponse = "Désolé, l'assistant IA nécessite un environnement de développement spécifique ou un serveur backend pour fonctionner (par exemple, dans l'environnement WebSim). Il ne peut pas répondre à votre question actuellement sur ce site statique.";
                appendMessage(aiResponse, 'ai-message error');
                aiLoading.classList.add('hidden');
                sendBtn.disabled = false;
                chatInput.focus();
            }, 1500); // Simulate a short delay
            return;
        }

        try {
            conversationHistory.push({ role: "user", content: userMessage });
            conversationHistory = conversationHistory.slice(-6); // Keep history short

            const completion = await websim.chat.completions.create({
                messages: [
                    { role: "system", content: systemPrompt },
                    ...conversationHistory
                ],
            });

            const aiResponse = completion.content;
            conversationHistory.push({ role: "assistant", content: aiResponse });
            appendMessage(aiResponse, 'ai-message');

        } catch (error) {
            console.error("Error with AI completion:", error);
            appendMessage("Désolé, une erreur est survenue avec l'API de l'IA. Veuillez réessayer.", 'ai-message error');
        } finally {
            aiLoading.classList.add('hidden');
            sendBtn.disabled = false;
            chatInput.focus();
        }
    };

    if (typeof websim === 'undefined' || !websim.chat || !websim.chat.completions) {
        chatInput.disabled = true;
        sendBtn.disabled = true;
        appendMessage(" L'assistant IA est en mode démonstration. Cette fonctionnalité est active uniquement dans un environnement de développement sécurisé ou avec un serveur backend. Elle ne fonctionnera pas sur un site statique comme GitHub Pages.", 'ai-message error');
    } else {
        sendBtn.addEventListener('click', handleSendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    }
}