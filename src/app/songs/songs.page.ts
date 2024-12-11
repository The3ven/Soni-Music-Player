import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { IonRange, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  play,
  playSkipForwardOutline,
  playSkipBackOutline,
  pause,
  close,
  chevronDownOutline,
} from 'ionicons/icons';
import { StorageService } from '../services/storage.service'; // Adjust the path as necessary
import { CapacitorMusicControls } from "capacitor-music-controls-plugin";

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SongsPage implements OnInit {
  @ViewChild('range', { static: false }) range!: IonRange;

  songs = [
    // BANGLA SONG
    {
      title: 'Aami Tomar Kache',
      subtitle: 'Arijit Singh',
      img: 'assets/img/bangla/aami_tomar_kache.jpg',
      path: '/assets/songs/bangla/Aami_Tomar_Kache.mp3',
    },
    {
      title: 'Aashona',
      subtitle: 'Arijit Singh',
      img: 'assets/img/bangla/aashona.jpg',
      path: '/assets/songs/bangla/Aashona.mp3',
    },
    {
      title: 'Boba Tunnel',
      subtitle: 'Anupam Roy',
      img: 'assets/img/bangla/boba_tunnel.jpg',
      path: '/assets/songs/bangla/Boba_Tunnel.mp3',
    },
    {
      title: 'Bojhena Shey Bojhena',
      subtitle: 'Arijit Singh',
      img: 'assets/img/bangla/bojhena_shey_bojhena.jpg',
      path: '/assets/songs/bangla/Bojhena_Shey_Bojhena.mp3',
    },
    {
      title: 'Egiye de | Shudhu Tomari Jonyo',
      subtitle: 'Shudhu Tomari Jonyo',
      img: 'assets/img/bangla/egiye_de.jpg',
      path: '/assets/songs/bangla/Egiye_de_Shudhu_Tomari_Jonyo.mp3',
    },
    {
      title: 'Lal Shari Poriya Konna',
      subtitle: 'SHOHAG',
      img: 'assets/img/bangla/lal_shari_poriya_konna.jpg',
      path: '/assets/songs/bangla/Lal_Shari_Poriya_Konna.mp3',
    },
    {
      title: 'MONTA RE',
      subtitle: 'T-Series',
      img: 'assets/img/bangla/monta_re.jpg',
      path: '/assets/songs/bangla/Monta_Re.mp3',
    },
    {
      title: 'Ore Manwa Re',
      subtitle: 'T-Series Bangla',
      img: 'assets/img/bangla/ore_manwa_re.jpg',
      path: '/assets/songs/bangla/Ore_Manwa_Re.mp3',
    },
    {
      title: 'Tomake Chai',
      subtitle: 'Gangster',
      img: 'assets/img/bangla/tomake_chai.jpg',
      path: '/assets/songs/bangla/Tomake_Chai.mp3',
    },

    //   ENGLISH SONGS NOW

    {
      title: '7 rings',
      subtitle: 'Ariana Grande',
      img: 'assets/img/english/7_rings.jpg',
      path: '/assets/songs/english/7_rings.mp3',
    },
    {
      title: '10,000 Hours',
      subtitle: 'Dan + Shay, Justin Bieber',
      img: 'assets/img/english/10000_hours.jpg',
      path: '/assets/songs/english/10,000_hours.mp3',
    },
    {
      title: 'Baby',
      subtitle: 'Justin Bieber',
      img: 'assets/img/english/baby.jpg',
      path: '/assets/songs/english/Baby.mp3',
    },
    {
      title: 'bloodline',
      subtitle: 'Ariana Grande',
      img: 'assets/img/english/bloodline.jpg',
      path: '/assets/songs/english/bloodline.mp3',
    },
    {
      title: 'Cruel Summer',
      subtitle: 'Taylor Swift',
      img: 'assets/img/english/cruel_summer.jpg',
      path: '/assets/songs/english/Cruel_Summer.mp3',
    },
    {
      title: 'Dark Horse',
      subtitle: 'Katy Perry',
      img: 'assets/img/english/dark_horse.jpg',
      path: '/assets/songs/english/Dark_Horse.mp3',
    },
    {
      title: 'Die For You',
      subtitle: 'The Weeknd',
      img: 'assets/img/english/die_for_you.jpg',
      path: '/assets/songs/english/Die_For_You.mp3',
    },
    {
      title: 'Die With A Smile',
      subtitle: 'Lady Gaga',
      img: 'assets/img/english/die_with_a_smile.jpg',
      path: '/assets/songs/english/Die_With_A_Smile.mp3',
    },
    {
      title: 'Fairytale',
      subtitle: 'Alexander Rybak',
      img: 'assets/img/english/Fairytale.jpg',
      path: '/assets/songs/english/Fairytale.mp3',
    },
    {
      title: 'Gangsta',
      subtitle: 'Kehlani',
      img: 'assets/img/english/gangsta.jpg',
      path: '/assets/songs/english/Gangsta.mp3',
    },
    {
      title: 'Him & I',
      subtitle: 'G-Eazy, Halsey',
      img: 'assets/img/english/him_and_i.jpg',
      path: '/assets/songs/english/Him_&_I.mp3',
    },
    {
      title: 'Into You',
      subtitle: 'Ariana Grande',
      img: 'assets/img/english/into_you.jpg',
      path: '/assets/songs/english/Into_You.mp3',
    },
    {
      title: 'Lover',
      subtitle: 'Taylor Swift',
      img: 'assets/img/english/lover.jpg',
      path: '/assets/songs/english/Lover.mp3',
    },
    {
      title: 'Perfect',
      subtitle: 'Ed Sheeran',
      img: 'assets/img/english/perfect.jpg',
      path: '/assets/songs/english/Perfect.mp3',
    },
    {
      title: 'Shameless',
      subtitle: 'The Weeknd',
      img: 'assets/img/english/shameless.jpg',
      path: '/assets/songs/english/Shameless.mp3',
    },
    {
      title: 'Slut!',
      subtitle: 'Demi Lovato',
      img: 'assets/img/english/slut.jpg',
      path: '/assets/songs/english/Slut.mp3',
    },
    {
      title: 'Strawberry & Cigarettes',
      subtitle: 'Troye Sivan',
      img: 'assets/img/english/strawberry_cigarettes.jpg',
      path: '/assets/songs/english/Strawberry_&_Cigarettes.mp3',
    },
    {
      title: 'Stuck with U',
      subtitle: 'Ariana Grande, Justin Bieber',
      img: 'assets/img/english/stuck_with_u.jpg',
      path: '/assets/songs/english/Stuck_with_U.mp3',
    },
    {
      title: 'Unstoppable',
      subtitle: 'Sia',
      img: 'assets/img/english/Unstoppable.jpg',
      path: '/assets/songs/english/Unstoppable.mp3',
    },
    {
      title: "we can't be friends",
      subtitle: 'Unknown Artist',
      img: 'assets/img/english/we_cant_be_friends.jpg',
      path: '/assets/songs/english/we_cant_be_friends.mp3',
    },
    {
      title: "We Don't Talk Anymore",
      subtitle: 'Charlie Puth, Selena Gomez',
      img: 'assets/img/english/we_dont_talk_anymore.jpg',
      path: '/assets/songs/english/We_Dont_Talk_Anymore.mp3',
    },

    // HINDI SONGS
    {
      title: 'Banjaara - Ek Tha Tiger',
      subtitle: 'Sukhwinder Singh',
      img: 'assets/img/bollywood/Banjaara.jpg',
      path: '/assets/songs/bollywood/Banjaara.mp3',
    },
    {
      title: 'Bulleya',
      subtitle: 'Papon and Amit Mishra',
      img: 'assets/img/bollywood/Bulleya.jpg',
      path: '/assets/songs/bollywood/Bulleya.mp3',
    },
    {
      title: 'Chand Sifarish',
      subtitle: 'Shaan, Kailash Kher',
      img: 'assets/img/bollywood/Chand_Sifarish.jpg',
      path: '/assets/songs/bollywood/Chand_Sifarish.mp3',
    },
    {
      title: 'Guli Mata',
      subtitle: 'Saad Lamjarred, Shreya Ghoshal',
      img: 'assets/img/bollywood/Guli_Mata.jpg',
      path: '/assets/songs/bollywood/Guli_Mata.mp3',
    },
    {
      title: 'Hale Dil Tujhko Sunata',
      subtitle: 'Harshit Saxena',
      img: 'assets/img/bollywood/Hale_Dil_Tujhko_Sunata.jpg',
      path: '/assets/songs/bollywood/Hale_Dil_Tujhko_Sunata.mp3',
    },
    {
      title: 'Isq Risk',
      subtitle: 'Javed Ali',
      img: 'assets/img/bollywood/Isq_Risk.jpg',
      path: '/assets/songs/bollywood/Isq_Risk.mp3',
    },
    {
      title: 'Ishq',
      subtitle: 'Sukhwinder Singh and Sapna Awasthi',
      img: 'assets/img/bollywood/Ishq.jpg',
      path: '/assets/songs/bollywood/Ishq.mp3',
    },
    {
      title: 'JO TUM MERE HO',
      subtitle: 'Anuv Jain',
      img: 'assets/img/bollywood/JO_TUM_MERE_HO.jpg',
      path: '/assets/songs/bollywood/Jo_Tum_Mere_Ho.mp3',
    },
    {
      title: 'Laapata - Ek Tha Tiger',
      subtitle: 'KK, Palak Muchhal',
      img: 'assets/img/bollywood/Laapata.jpg',
      path: '/assets/songs/bollywood/Laapata.mp3',
    },
    {
      title: 'Mast Magan',
      subtitle: 'Arijit Singh and Chinmayi Sripada',
      img: 'assets/img/bollywood/Mast_Magan.jpg',
      path: '/assets/songs/bollywood/Mast_Magan.mp3',
    },
    {
      title: 'Saaiyaan',
      subtitle: 'Kailash Kher',
      img: 'assets/img/bollywood/Saaiyaan.jpg',
      path: '/assets/songs/bollywood/Saaiyaan.mp3',
    },
    {
      title: 'Saiyaara - Ek Tha Tiger',
      subtitle: 'Tarannum Mallik, Mohit Chauhan',
      img: 'assets/img/bollywood/Saiyaara.jpg',
      path: '/assets/songs/bollywood/Saiyaara.mp3',
    },
    {
      title: 'Tera Hone Laga Hoon',
      subtitle: 'Atif Aslam and Alisha Chinai',
      img: 'assets/img/bollywood/Tera_Hone_Laga_Hoon.jpg',
      path: '/assets/songs/bollywood/Tera_Hone_Laga_Hoon.mp3',
    },
    {
      title: 'Tu Har Lamha',
      subtitle: 'Arijit Singh',
      img: 'assets/img/bollywood/Tu_Har_Lamha.jpg',
      path: '/assets/songs/bollywood/Tu_Har_Lamha.mp3',
    },
  ];

  eventobj = Object.create(null);

  // Current Song Details
  currTitle: string;
  currSubtitle: string;
  currImage: string;
  currentSecsText: string;
  durationText: string;

  // progress bar value
  progress: number;

  // current song index
  currentIdx: number;

  // toggle for play/pause button
  isPlaying: boolean;

  // track of ion-range touch
  isTouched: boolean;

  // ion range texts
  currSecsText: string;
  // durationText:string = "";

  // ion range value
  currRangeTime: number;
  maxRangeValue: number;

  // Current Song
  currSong!: HTMLAudioElement;

  // Upnext song details
  upNextImg: string;
  upNextTitle: string;
  upNextSubtitle: string;

  fullPlayer!: HTMLElement;
  miniPlayer!: HTMLElement;

  fullPlayerToggle: boolean;

  lastprevActionTime:number;
  lastnextActionTime:number;
  debounseTime:number;
  intervalId:any;
  elapsedTime:number;


  constructor(private storageService: StorageService) {
    addIcons({
      play,
      playSkipForwardOutline,
      playSkipBackOutline,
      pause,
      close,
      chevronDownOutline,
    });
    this.progress = 0;
    this.currentIdx = 0;
    this.isPlaying = false;
    this.currTitle = '';
    this.currSubtitle = '';
    this.currImage = '';
    this.currentSecsText = '';
    this.durationText = '';
    this.isTouched = false;
    this.currSecsText = '';
    this.currRangeTime = 0;
    this.maxRangeValue = 0;
    this.upNextImg = '';
    this.upNextTitle = '';
    this.upNextSubtitle = '';
    this.fullPlayer = document.getElementById('fullPlayer') as HTMLElement;
    this.miniPlayer = document.getElementById('miniPlayer') as HTMLElement;
    this.eventobj = null;
    this.fullPlayerToggle = false;
    this.lastprevActionTime = 0;
    this.lastnextActionTime = 0;
    this.debounseTime = 300;
    this.intervalId = null;
    this.elapsedTime = 0;
  }

  ngOnInit() {
    this.storageService
      .getItem('current_song_index')
      .then(async (index) => {
        if (!index) {
          index = 0;
        }
        this.currentIdx = index;
        this.setPlayer();
      })
      .catch(async (err) => {
        this.currentIdx = 0;
        this.setPlayer();
      });

    this.fullPlayer = document.getElementById('fullPlayer') as HTMLElement;
    this.miniPlayer = document.getElementById('miniPlayer') as HTMLElement;
    if (this.miniPlayer) {
      this.miniPlayer.style.bottom = '0px';
    }
  }

  ngOnDestroy() {
    if (this.eventobj !== null) {
      this.destroyNotification();
    }
  }

  setPlayer = async () => {
    this.currTitle = this.songs[this.currentIdx].title;
    this.currSubtitle = this.songs[this.currentIdx].subtitle;
    this.currImage = this.songs[this.currentIdx].img;
    this.currSong = new Audio(this.songs[this.currentIdx].path);

    const nextIdx = Number(this.songIndexByName(this.currTitle)) + 1;
    this.upNextTitle = this.songs[nextIdx].title;
    this.upNextSubtitle = this.songs[nextIdx].subtitle;
    this.upNextImg = this.songs[nextIdx].img;
    this.setNotification(this.currTitle, this.currSubtitle, this.currImage, this.isPlaying);
  };

  saveCurrentSongIndex = async (index: number) => {
    await this.storageService.setItem('current_song_index', index);
  };

  playSong(title: string, subTitle: string, img: string, song: string) {
    // if a song plays, stop that
    if (this.currSong != null) {
      this.currSong.pause();
    }

    // open full player view

    // const fullPlayer = document.getElementById("fullPlayer") as HTMLElement;

    if (this.fullPlayer) {
      this.fullPlayer.style.bottom = '0px';
    }

    // set current song details
    this.currTitle = title;
    this.currSubtitle = subTitle;
    this.currImage = img;

    // Current Song Audio
    this.currSong = new Audio(song);

    this.currSong.play().then(() => {
      // set Upcoming song by current song index

      var index = this.songIndexByName(this.currTitle); //this.songs.findIndex(x => x.title == this.currTitle);

      if (this.currentIdx != index) {
        this.currentIdx = index;
        // Set last play song for next App opening
        this.saveCurrentSongIndex(index);
      }

      // Total Song Duration
      this.durationText = this.sToTime(this.currSong.duration);
      // set max range value
      this.maxRangeValue = Number(
        this.currSong.duration.toFixed(2).toString().substring(0, 5)
      );

      if (index + 1 == this.songs.length) {
        this.upNextImg = this.songs[0].img;
        this.upNextTitle = this.songs[0].title;
        this.upNextSubtitle = this.songs[0].subtitle;
      }
      // else set next song info from upnext index song
      else {
        this.upNextImg = this.songs[index + 1].img;
        this.upNextTitle = this.songs[index + 1].title;
        this.upNextSubtitle = this.songs[index + 1].subtitle;
      }
      this.isPlaying = true;
      this.setNotification(this.currTitle, this.currSubtitle, this.currImage, this.isPlaying);
    }).catch((e) => {
      console.log("error : ", e);
    })
    this.addEvent();
  };

  addEvent() {
    this.currSong.addEventListener('timeupdate', () => {
      // update some infos as song plays on

      // if ion range not touched then do update
      if (!this.isTouched) {
        // update ion range value
        this.currRangeTime = Number(
          this.currSong.currentTime.toFixed(2).toString().substring(0, 5)
        );

        // update current seconds text
        this.currSecsText = this.sToTime(this.currSong.currentTime);

        // update progress bar (in minimize view)
        this.progress =
          Math.floor(this.currSong.currentTime) /
          Math.floor(this.currSong.duration);
        if (this.currSong.currentTime == this.currSong.duration) {
          this.playNext();
        }
      }
    });
  };

  sToTime(t: any) {
    return (
      this.padZero(parseInt(String((t / 60) % 60))) +
      ':' +
      this.padZero(parseInt(String(t % 60)))
    );
  };

  padZero(v: any) {
    return v < 10 ? '0' + v : v;
  };

  songIndexByName(title: string) {
    return this.songs.findIndex((x) => x.title == title);
  };

  songInfoByIndex(idx: number) {
    return this.songs[idx];
  };

  playNext() {
    // get Current song index
    var index = this.songIndexByName(this.currTitle); //this.songs.findIndex(x => x.title == this.currTitle);

    // if current song is last then play first song
    var nextIndex = 0;
    if (index + 1 == this.songs.length) {
      nextIndex = 0;
    }
    // else play next song
    else {
      nextIndex = index + 1;
    }

    console.log("current idx ", index, "index of next song ", nextIndex);

    this.playSong(
      this.songs[nextIndex].title,
      this.songs[nextIndex].subtitle,
      this.songs[nextIndex].img,
      this.songs[nextIndex].path
    );
  };

  playPrev() {
    // get Current song index
    var index = this.songIndexByName(this.currTitle); //this.songs.findIndex(x => x.title == this.currTitle);
    var songIndex = 0;
    if (index == 0) {
      songIndex = this.songs.length - 1;
    }
    // else play previous song
    else {
      songIndex = index - 1;
    }

    // if (this.currSong != null) {
    //   this.currSong.pause();
    // }

    this.playSong(
      this.songs[songIndex].title,
      this.songs[songIndex].subtitle,
      this.songs[songIndex].img,
      this.songs[songIndex].path
    );
  };

  // minimize full player view
  minimize() {
    // const fullPlayer = document.getElementById("fullPlayer") as HTMLElement;
    if (this.fullPlayer) {
      this.fullPlayer.style.bottom = '-1000px';
    }
    // const miniPlayer = document.getElementById("miniPlayer") as HTMLElement;
    if (this.miniPlayer) {
      this.miniPlayer.style.bottom = '0px';
    }
    this.fullPlayerToggle = false;
  };

  // maximizing full player view
  maximize() {
    // const fullPlayer = document.getElementById("fullPlayer") as HTMLElement;
    if (this.fullPlayer) {
      this.fullPlayer.style.bottom = '0px';
    }
    // const miniPlayer = document.getElementById("miniPlayer") as HTMLElement;
    if (this.miniPlayer) {
      this.miniPlayer.style.bottom = '-100px';
    }
    this.fullPlayerToggle = true;
  };

  // pause current playing song
  pause() {
    this.currSong.pause();
    this.isPlaying = false;
    this.toggle(this.isPlaying);
  };

  // play current playing song

  play() {
    this.currSong.play();
    this.isPlaying = true;
    // Total Song Duration
    this.durationText = this.sToTime(this.currSong.duration);
    // set max range value
    this.maxRangeValue = Number(
      this.currSong.duration.toFixed(2).toString().substring(0, 5)
    );
    this.addEvent();
    this.toggle(this.isPlaying);
  };

  cancel() {
    // const miniPlayer = document.getElementById("miniPlayer") as HTMLElement;
    if (this.miniPlayer) {
      this.miniPlayer.style.bottom = '-100px';
    }
    this.currImage = '';
    this.currTitle = '';
    this.progress = 0;
    this.currSong.pause();
    this.isPlaying = false;
    this.toggle(this.isPlaying);
  };

  // on touching ion-range
  touchStart() {
    this.isTouched = true;
    this.currRangeTime = Number(this.range.value);
  };

  // on moving ion-range
  // update current seconds text
  touchMove() {
    this.currSecsText = this.sToTime(this.range.value);
  };

  // on touch release/end
  touchEnd() {
    this.isTouched = false;
    this.currSong.currentTime = Number(this.range.value);
    this.currSecsText = this.sToTime(this.currSong.currentTime);
    this.currRangeTime = Number(
      this.currSong.currentTime.toFixed(2).toString().substring(0, 5)
    );
    if (this.isPlaying) {
      this.currSong.play();
    }
  };

  handleNext()
  {
    const currentTime = Date.now();
    if(currentTime - this.lastnextActionTime > this.debounseTime)
    {
      this.lastnextActionTime = currentTime;
      this.playNext();
      console.log("fullPlayerToggle : ", this.fullPlayerToggle);
      this.maximize();
      this.addEvent();
    }
  }

  handlePrev()
  {
    const currentTime = Date.now();
    if(currentTime - this.lastprevActionTime > this.debounseTime)
    {
      this.lastprevActionTime = currentTime;
      this.playPrev();
      console.log("fullPlayerToggle : ", this.fullPlayerToggle);
      this.maximize();
      this.addEvent();
    }
  }

  getPercentage(decimal: number, precision: number = 2): number {
    if (decimal < 0 || decimal > 1) {
      return parseFloat((0.00 * 100).toFixed(precision));
    }
    return parseFloat((decimal * 100).toFixed(precision));
  }

  setNotification(track: string, artist: string, cover: string, isPlaying: boolean) {
    CapacitorMusicControls.create({
      track: track,
      artist: artist,
      cover: cover,
      isPlaying: isPlaying,
      hasPrev: true,
      hasNext: true,
      hasClose: false,
      ticker: track,
      dismissable: false,
      playIcon: "media_play",
      pauseIcon: "media_pause",
      prevIcon: "media_prev",
      nextIcon: "media_next",
      closeIcon: "media_close",
      notificationIcon: "notification",
      duration: this.maxRangeValue,
    })
      .then(() => {
        this.intervalId = setInterval(() => {
          if ( isPlaying ) {
            this.elapsedTime++;
            console.log("elapsed : ",this.elapsedTime);  
            CapacitorMusicControls.updateElapsed({
              elapsed: this.elapsedTime,
              isPlaying: this.isPlaying,
            });
          }
        }, 1000);
        document.addEventListener("controlsNotification", (event) => {
          if (this.eventobj !== event) {
            this.eventobj = event;
          }
          const info = { message: this.eventobj.message, position: 0 };
          
          this.handleControlsEvent(info);
        });
        console.log("Notification updated");
      })
      .catch((e:any) => {
        console.log(e);
      });
  };

  handleControlsEvent(action:any){

    console.log("hello from handleControlsEvent")
    const message = action.message;
  
    console.log("message: " + message)
  
    switch(message) {
      case 'music-controls-next':
        this.toggle(true);
        this.handleNext();
        break;
      case 'music-controls-previous':
        this.toggle(true);
        this.handlePrev();
        break;
      case 'music-controls-pause':
        this.toggle(false);
        this.pause();
        break;
      case 'music-controls-play':
        this.toggle(true);
        this.play();
        break;
      // case 'music-controls-destroy':
      //   // controls were destroyed
      //   break;
  
      // // External controls (iOS only)
      // case 'music-controls-toggle-play-pause' :
      //   // do something
      //   break;
      // case 'music-controls-skip-to':
      //   // do something
      //   break;
      // case 'music-controls-skip-forward':
      //   // Do something
      //   break;
      // case 'music-controls-skip-backward':
      //   // Do something
      //   break;
  
      // // Headset events (Android only)
      // // All media button events are listed below
      // case 'music-controls-media-button' :
      //   // Do something
      //   break;
      // case 'music-controls-headset-unplugged':
      //   // Do something
      //   break;
      // case 'music-controls-headset-plugged':
      //   // Do something
      //   break;
      default:
        break;
    }
  }


  destroyNotification() {
    CapacitorMusicControls.destroy();
  };

  // updatePlayNotification = async (isPlaying: boolean) => {
  //   if (isPlaying !== !isPlaying) {
  //     try {
  //       CapacitorMusicControls.updateIsPlaying({
  //         isPlaying: isPlaying, // affects Android only
  //       });
  //       console.log("Play button updated");
  //     } catch (e) {
  //       console.error("Error updating play notification:", e);
  //     }
  //   }
  // };
  toggle(isPlaying:boolean){
    if(isPlaying != !isPlaying)
    {
      CapacitorMusicControls.updateIsPlaying({ isPlaying }); // toggle the play/pause notification button
    }
    // CapacitorMusicControls.updateDismissable(isPlaying ? false : true);
  };

}
