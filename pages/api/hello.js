// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default (req, res) => {
  res.statusCode = 200;
  if(req.query && req.query.logs){
    res.type('text/plain');
    res.send(fs.readFileSync('./logs.txt', 'utf-8'));
  }
  const data = { 
    query: req.query, 
    body: req.body,
  };
  fs.writeFileSync('./logs.txt', JSON.stringify(data, null, 4), 'utf8');
  res.json(data);
}
