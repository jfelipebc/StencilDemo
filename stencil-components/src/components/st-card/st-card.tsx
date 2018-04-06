import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'st-card',
  styleUrl: 'st-card.css',
  shadow: true
})
export class Card {
  @Prop() photo: string;
  @Prop() city: string;
  @Prop() name: string;

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <div class="card-image">
            <img src={this.photo} />
          </div>
          <div class="card-subtitle">{this.city}</div>
          <div class="card-title">{this.name}</div>
        </div>
        <div class="card-footer">
          <button class="btn btn-call">Call</button>
          <button class="btn btn-send">Send e-mail</button>
        </div>
      </div>
    );
  }
}
