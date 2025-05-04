export default async function handler(req, res) {
   // Якщо хочеш захистити доступ – наприклад, перевірити токен у заголовку:
   const auth = req.headers['x-my-auth']
   if (auth !== process.env.MY_AUTH_TOKEN) {
     return res.status(401).json({ error: 'Unauthorized' })
   }
 
   // Витягуємо секрет з середовища
   const secret = process.env.MY_API_SECRET
 
   // Можеш викликати реальний API з цим секретом
   // const data = await fetch(`https://api.service.com/data?key=${secret}`).then(r=>r.json())
 
   // Або просто повернути сам секрет (не рекомендується в проді!)
   res.status(200).json({ secret })
 }