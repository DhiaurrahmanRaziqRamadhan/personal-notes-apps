import React from "react";

class NotesInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: ''
    }

    this.onTitleChangeEventListener = this.onTitleChangeEventListener.bind(this);
    this.onBodyChangeEventListener = this.onBodyChangeEventListener.bind(this);
    this.onSubmitEventListener = this.onSubmitEventListener.bind(this);
  }

  onTitleChangeEventListener(e) {
    const inputValue = e.target.value;

    // Batasi panjang judul tidak lebih dari 50 karakter
    if (inputValue.length <= 50) {
      this.setState({
        title: inputValue,
      });
    }
  }

  onBodyChangeEventListener(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      }
    })
  }

  onSubmitEventListener(e) {
    e.preventDefault()
    this.props.addNotes(this.state);
  }

  render() {
    const remainingCharacters = 50 - this.state.title.length;

    return (
      <form className="notes-input" onSubmit={this.onSubmitEventListener}>
        <label><p className="sisaKarakter">Sisa karakter: {remainingCharacters}</p></label>
        <label htmlFor="judul">Judul</label>
        <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventListener} id="judul"  maxLength="50" required/>
        <label htmlFor="catatan">Catatan</label>
        <textarea id="catatan" value={this.state.body} onChange={this.onBodyChangeEventListener} placeholder="Buat catatanmu disini..."></textarea>
        <button className="inputBtn" type="submit">Tambah</button>
      </form>  
    );
  }
}

export default NotesInput;