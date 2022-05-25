import { BigInt } from "@graphprotocol/graph-ts"
import { Transfer } from "../generated/Contract/Contract"
import { TransferEvent } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let transferEvent = new TransferEvent(event.transaction.hash.toHex())

  let amount = (event.params._value.toBigDecimal())
  transferEvent.amount = amount

  transferEvent.sender = event.params._from
  transferEvent.destination = event.params._to

  transferEvent.block = event.block.number
  transferEvent.timestamp = event.block.timestamp
  transferEvent.transaction = event.transaction.hash

  transferEvent.save()
}
