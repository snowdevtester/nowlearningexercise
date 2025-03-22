import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '0aa92549000b4c1dabb7d24a62c11e51'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'd00e944d1eca45fa890ad0b8c2e2b0a3'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'd9c6a821731c492c89bb94bb82b8ccf5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0cd7f0a25d364afd8f5510dad78fbf49'
                    }
                }
            }
        }
    }
}
