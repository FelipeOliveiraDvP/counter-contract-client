import { Drizzle } from '@drizzle/store';
import Counter from '../contracts/Counter.json';

const drizzleOptions = {
    contracts: [Counter],
    events: {
        Counter: ['CounterIncrement', 'CounterDecrement']
    }
}

const drizzle = new Drizzle(drizzleOptions);

export default drizzle;