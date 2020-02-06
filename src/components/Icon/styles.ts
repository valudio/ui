import styled from 'styled-components'

export default styled.i`
  font-family: 'Icons';
  font-style: normal;

  &.clickable {
    cursor: pointer;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  &.add::before {
    content: '\\e000';
  }

  &.points::before {
    content: '\\e001';
  }

  &.received::before {
    content: '\\e002';
  }

  &.atention::before {
    content: '\\e003';
  }

  &.calendar::before {
    content: '\\e004';
  }

  &.right::before {
    content: '\\e005';
  }

  &.search::before {
    content: '\\e006';
  }

  &.check::before {
    content: '\\e007';
  }

  &.close::before {
    content: '\\e008';
  }

  &.sent::before {
    content: '\\e009';
  }

  &.up::before {
    content: '\\e00a';
  }

  &.dashboard::before {
    content: '\\e00b';
  }

  &.down::before {
    content: '\\e00c';
  }

  &.download::before {
    content: '\\e00d';
  }

  &.filter::before {
    content: '\\e00e';
  }

  &.info::before {
    content: '\\e00f';
  }

  &.language::before {
    content: '\\e010';
  }

  &.left::before {
    content: '\\e011';
  }

  &.ok::before {
    content: '\\e012';
  }

  &.pdf::before {
    content: "\\e013";
    color: #D94F3E;
  }

  &.img::before {
    content: "\\e014";
    color: #C9353E;
  }

  &.baan::before {
    content: "\\e015";
    color: #449F7F;
  }

  &.xml::before {
    content: "\\e016";
    color: #E8A500;
  }

  &.sap::before {
    content: "\\e017";
    color: #4759C8;
  }

  &.excel::before {
    content: "\\e018";
    color: #50A341;
  }

  &.html::before {
    content: "\\e019";
    color: #E7782D;
  }

  &.ifs::before {
    content: "\\e01a";
    color: #449F7F;
  }

  &.txt::before {
    content: "\\e01b";
    color: #6575FF;
  }

  &.edi::before {
    content: "\\e01c";
    color: #473CB9;
  }

  &.hide::before {
    content: "\\e01d";
  }

  &.eye::before {
    content: "\\e01e";
  }

  &.menu::before {
    content: "\\e01f";
  }

  &.print:before {
    content: "\\e020";
  }

  &.user:before {
    content: "\\e021";
  }

  &.sign-out:before {
    content: "\\e022";
  }

  &.map:before {
    content: "\\e023";
  }

  &.edit:before {
    content: "\\e024";
  }

  &.documents:before {
    content: "\\e025";
  }

  &.delete:before {
    content: "\\e026";
  }
`
