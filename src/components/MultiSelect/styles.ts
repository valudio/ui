import styled from 'styled-components'

const height = 40

export default styled.article`
  display: flex;
  flex: 0 0 auto;
  width: 272px;
  position: relative;
  height: ${ height }px;
  background: ${ ({ theme }) => theme.colors.grey.light };
  padding: 0 8px 0 12px;
  border-radius: 2px;
  border: 1.5px solid transparent;
  cursor: pointer;

  &.open {
    border: 1.5px solid ${ ({ theme }) => theme.colors.primary.medium };
  }

  &.invalid {
    border: 1.5px solid ${ ({ theme }) => theme.colors.system.error };

    .value {
      background: ${ ({ theme }) => theme.colors.system.error }35;
      color: ${ ({ theme }) => theme.colors.system.error };
    }
  }

  &.disabled {
    background: ${ ({ theme }) => theme.colors.grey.medium };
    cursor: not-allowed;
  }

  .wrapper {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;

    .values {
      display: flex;
      flex-direction: row;
      flex: 1;
      overflow: hidden;
      margin: 0 8px 0 0;

      .placeholder {
        color: ${ ({ theme }) => theme.colors.typography.light };
        font-family: ${ ({ theme }) => theme.fontFamily };
        user-select: none;
      }

      .value {
        margin: 0 8px 0 0;
      }
    }
  }
`
