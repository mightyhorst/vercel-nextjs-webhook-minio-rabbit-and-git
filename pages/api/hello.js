// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default (req, res) => {
  res.statusCode = 200;
  // if(req.query && req.query.logs){
    // const logs = fs.readFileSync('./logs.txt', 'utf-8');
    // return res.json({logs});
  // }
  const data = { 
    query: req.query, 
    body: req.body,
  };
  // fs.writeFileSync('./logs.txt', JSON.stringify(data, null, 4), 'utf8');
  return res.json(data);
}
