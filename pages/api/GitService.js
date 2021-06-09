import simpleGit, {SimpleGit} from 'simple-git';
import path from 'path';

const baseDir = path.resolve(__dirname, 'gitrepo');
const git = simpleGit(baseDir);

export function getDiff(){
    
}
