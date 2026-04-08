function getBrowserHistory(commands) {
  let history = [];
  let current = -1;

  for (let cmd of commands) {
    
    if (cmd === "Back") {
      if (current > 0) current--;
    } 
    
    else if (cmd === "Forward") {
      if (current < history.length - 1) current++;
    } 
    
    else {
      // New URL
      history = history.slice(0, current + 1); // remove forward history
      history.push(cmd);
      current++;
    }
  }

  return [history, current];
}

//2nd version
const browserHistory = cmds => {
  let h=[], i=-1;
  for(let c of cmds)
    c=="Back" ? i>0&&i-- :
    c=="Forward" ? i<h.length-1&&i++ :
    (h=h.slice(0,i+1), h.push(c), i++);
  return [h,i];
};