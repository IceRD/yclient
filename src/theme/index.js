import { StyleService } from '@ui-kitten/components'

export const globalStyles = StyleService.create({
  _safe: {
    flex: 1,
    backgroundColor: 'color-primary-600'
  },
  _wrapper: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: 'color-basic-800',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  }
})
