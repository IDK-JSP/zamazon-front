import React, {FC, useState, useRef} from 'react';

const AudioPlayer: FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);  // Spécifier le type de ref
    const [isPlaying, setIsPlaying] = useState(false);
    //Pour une belle et douce musique
    const handlePlay = () => {
        if (audioRef.current) {
            if (!isPlaying) {
                audioRef.current.play();
                setIsPlaying(!isPlaying);
            } else {
                audioRef.current.pause();
                setIsPlaying(!isPlaying);
            }
            audioRef.current.volume = 0.1;
        }
    };

    return (
        <div>
            {/* Bouton pour démarrer la musique */}
            <button onClick={handlePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <audio ref={audioRef} loop>
                <source src="Oggy Et Les Cafards Hardcore Remix By CROCONUTS.mp3" type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioPlayer;
