import { Component, OnInit } from '@angular/core';
import { dataSeries } from './dataSeries';

export class Serie {
    id: number;
    name: string;
    channel: String;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;

    public constructor(id: number, name: string, channel: string, seasons: number, description: string, webpage: string, poster: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webpage = webpage;
        this.poster = poster;
    }

    private series: Array<Serie>;
        getSerieList(): Array<Serie> {
        return dataSeries;
    }
}
