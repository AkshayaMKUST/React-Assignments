import { calculateSI, calculateCI} from './interest.js';
import readline from 'readline';

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      function prompt(question) {
        return new Promise((resolve) => {
          rl.question(question, resolve);
        });
      }
      async function interest() {
        try {
          const pa = parseFloat(await prompt('Enter principal amount: '));
          const r = parseFloat(await prompt('Enter rate of interest: '));
          const t = parseFloat(await prompt('Enter time period: '));
          const c = parseFloat(await prompt('Enter compoundings per year:'));
      
          const SI = await calculateSI(pa, r, t);
          const CI = await calculateCI(pa, r, t, c);
      
          console.log('Simple Interest =', SI.toFixed(2));
          console.log('Compound Interest =', CI.toFixed(2));
        } catch (error) {
          console.error('Error calculating interest:', error.message);
        } finally {
          rl.close();
        }
      }
    interest();      


