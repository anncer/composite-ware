
type emitFn = (event: string, ...args: UnknownArray) => void

export const usePaginationEvents = (emit: emitFn) => {
  return {
    handleConfirm: () => {
      console.log('confirm')
    },

    handleCancle: () => {
      console.log('handleCancle')
    },
  }
}
