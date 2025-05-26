    import { evaluate } from 'mathjs';

        const WEATHER_API_KEY = '62ac3da20258263763aa500da5be2911'; // Replace this with your actual API key

        export const pluginManager = {
    //   weather
        async weather(args) {
            if (!args) return '⚠️ Please specify a city, e.g., /weather Paris';

            try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(args)}&appid=${WEATHER_API_KEY}&units=metric`
            );

            if (!res.ok) return `❌ Weather not found for "${args}"`;

            const data = await res.json();
            return `🌤️ Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
            } catch (err) {
            return `❌ Failed to fetch weather data`;
            }
        },

    //   calc
    calc(args) {
    if (!args) return '⚠️ Please enter a math expression, e.g., /calc 5 + 3';

    try {
        const result = evaluate(args);
        return `🧮 Result: ${result}`;
    } catch {
        return `❌ Invalid math expression`;
    }
    },

        // define
        async define(args) {
            if (!args) return '⚠️ Please enter a word to define, e.g., /define computer';

            try {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(args)}`);

            if (!res.ok) return `❌ No definition found for "${args}"`;

            const data = await res.json();
            const meanings = data[0].meanings.map((m) => `- ${m.partOfSpeech}: ${m.definitions[0].definition}`);
            return `📖 Definition of "${args}":\n${meanings.join('\n')}`;
            } catch (err) {
            return `❌ Failed to fetch definition`;
            }
        }
        };
