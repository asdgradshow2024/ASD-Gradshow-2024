import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig)

export default function Countdown({date}) {
  return <FlipClockCountdown
    to={date}
    digitBlockStyle={{
      backgroundColor: fullConfig.theme.colors['navbar-bg']
    }}
  />
} 